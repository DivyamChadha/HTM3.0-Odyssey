from sre_constants import SUCCESS

from backend.utils import get_tag_names
from .models import *

from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def index(request):
  return Response({'6': '9'})


@api_view(['GET'])
def get_tags(request):
  '''get an object that maps tag types to a tag list of that tag type'''
  
  success = False
  status_code = 400
  error = ""
  response = dict()
  response_data = dict()
  
  try:
    tag_types_list = Tags.objects.all().values('tag_type').distinct()
    if tag_types_list:
      for tag in tag_types_list:
        tag_type = tag['tag_type']
        tag_values = Tags.objects.filter(tag_type=tag_type).values()
        response_data[tag_type] = tag_values
      status_code = 200
      success = True
    else:
      error = "can't find any tags in the database"
  except Exception as e:
    error = f"'get_tags' errored with: {str(e)}"
    status_code = 400
    success = False
  finally:
    response = {
      'success': success,
      'status_code': status_code,
      'error': error,
      'data': response_data,
    }

    return Response(response)


@api_view(['GET'])
def get_countries(request):
  '''get all countries in the world, for country selection on the drontend'''
  return Response({'url': 'https://api.countrylayer.com/v2/all?access_key={API_KEY}'})


@api_view(['GET'])
def get_workplace(request):
  '''get all the workplaces beginning with the query'''

  success = False
  status_code = 400
  error = ""
  response = dict()
  response_data = list()

  query = request.query_params.get('q', '')

  try:
    if query:
      companies = Workplace.objects.filter(company__iregex=fr'({query})').values('company')
      if companies.exists():
        response_data = [company for company_dict in companies for _, company in company_dict.items()]
        success = True
        status_code = 200
    else:
      error = "couldn't find a workplace parameter in the request"
  except Exception as e:
    error = f"'get_workplaces' errored with: {str(e)}"
    status_code = 400
    success = False
  finally:
    response = {
      'success': success,
      'status_code': status_code,
      'error': error,
      'data': response_data,
    }

    return Response(response)

  
@api_view(['GET'])
def get_feedback(request):
  '''get all the feedback for a particular company'''

  success = False
  status_code = 400
  error = ""
  response = dict()
  response_data = list()

  workplace_id = request.query_params.get('q', '')

  try:
    if workplace_id:
      feedback = Feedback.objects.filter(workplace_id=workplace_id).values()
      if feedback.exists():
        response_data = list(feedback)
        success = True
        status_code = 200
      else:
        error = "couldn't find a workplace with that workplace_id"
    else:
      error = "couldn't find a workplace_id parameter in the request"
  except Exception as e:
    error = f"'get_feedback errored with: {str(e)}"
    status_code = 400
    success = False
  finally:
    response = {
      'success': success,
      'status_code': status_code,
      'error': error,
      'data': response_data
    }

    return Response(response)


@api_view(['GET'])
def get_payscale(request):
  '''get avg payscale for users based on tags'''

  success = False
  status_code = 400
  error = ""
  response = dict()
  response_data = dict()

  tag_id = request.query_params.get('q', '')

  try:
    if tag_id:
      user_ids = UserTags.objects.filter(tag_id=tag_id).values_list('user_id')
      salary_list = list()
      if user_ids.exists():
        for user_id in user_ids[0]:
          print(user_id)
          feedback = Feedback.objects.filter(user_id=user_id).values('pay').get()
          pay = feedback['pay']
          salary_list.append(pay)

        response_data['avg'] = float(sum(salary_list))/len(salary_list)
        response_data['salary_list'] = salary_list
        success = True
        status_code = 200
    else:
      error = "couldn't find a tag_id parameter in the request"
  except Exception as e:
    error = f"'get_payscale' errored with: {str(e)}"
    status_code = 400
    success = False
  finally:
    response = {
      "success": success,
      "status_code": status_code,
      "error": error,
      "data": response_data
    }

    return Response(response)


@api_view(['GET'])
def get_user_details(request):
  '''get details of a user, along with the tags and workplace'''

  success = False
  status_code = 400
  error = ""
  response = dict()
  response_data = dict()

  user_id = request.query_params.get('q', '')

  try:
    if user_id:
      workplace_obj = Feedback.objects.filter(user_id=user_id, still_working=True).values('workplace_id')
      if workplace_obj.exists():
        workplace_id = workplace_obj.get().get('workplace_id', '')
        workplace = Workplace.objects.filter(id=workplace_id).values('company')[0]
        user_info = User.objects.filter(id=user_id).values()[0]
        tag_id_list = UserTags.objects.filter(user_id=user_id).values_list('tag_id')[0]
        tag_names = get_tag_names(tag_id_list)

        all_user_info = user_info | workplace
        all_user_info['tags'] = tag_names

        response_data = all_user_info

        success = True
        status_code = 200
    else:
      error = "couldn't find a user_id parameter in the request"
  except Exception as e:
    error = f"'get_user_details' errored with: {str(e)}"
    status_code = 400
    success = False
  finally:
    response = {
      'success': success,
      'status_code': status_code,
      'error': error,
      'data': response_data
    }

    return Response(response)