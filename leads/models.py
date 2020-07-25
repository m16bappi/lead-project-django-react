from django.db import models
from django.contrib.auth.models import User


class lead(models.Model):
    user = models.ForeignKey(User, related_name='leads', on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    message = models.CharField(max_length=500, blank=True)
    create_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
