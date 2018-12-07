from django.contrib import admin

# Register your models here.
from main.models import Artist, Song

admin.site.register([Artist, Song])