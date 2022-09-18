from django.db import models


class User(models.Model):
  id = models.CharField(max_length=120, primary_key=True)
  first_name = models.CharField(max_length=30)
  last_name = models.CharField(max_length=30)
  email = models.CharField(max_length=30)
  country = models.CharField(max_length=30)
  city = models.CharField(max_length=30)
  pincode = models.CharField(max_length=30)

  class Meta:
    db_table = 'user'


class Workplace(models.Model):
  id = models.BigAutoField(primary_key=True)
  company = models.CharField(max_length=30)

  class Meta:
    db_table = 'workplace'


class Tags(models.Model):
  id = models.BigAutoField(primary_key=True)
  tag_type = models.CharField(max_length=30)
  name = models.CharField(max_length=30)

  class Meta:
    db_table = 'tags'


class UserTags(models.Model):
  id = models.BigAutoField(primary_key=True)
  user_id = models.CharField(max_length=120, db_index=True)
  tag_id = models.BigIntegerField(db_index=True)

  class Meta:
    db_table = 'user_tags'


class Feedback(models.Model):
  id = models.BigAutoField(primary_key=True)
  user_id = models.CharField(max_length=120, db_index=True)
  workplace_id = models.BigIntegerField(db_index=True)
  role_type = models.CharField(max_length=30)
  designation = models.CharField(max_length=50)
  pay = models.IntegerField()
  start_time = models.DateField()
  end_time = models.DateField(null=True)
  still_working = models.SmallIntegerField(null=True)

  class Meta:
    db_table = 'feedback'


class Perks(models.Model):
  id = models.BigAutoField(primary_key=True)
  name = models.CharField(max_length=30)

  class Meta:
    db_table = 'perks'


class UserPerks(models.Model):
  id = models.BigAutoField(primary_key=True)
  user_id = models.CharField(max_length=120, db_index=True)
  perk_id = models.BigIntegerField(db_index=True)

  class Meta:
    db_table = 'user_perks'
