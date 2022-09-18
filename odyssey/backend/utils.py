from .models import *

def get_tag_names(tag_id_list):
  tag_names = list()

  for tag_id in tag_id_list:
    tag = Tags.objects.filter(id=tag_id).values('name').get()
    tag_names.append(tag.get('name'))

  return tag_names