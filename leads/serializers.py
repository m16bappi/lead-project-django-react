from rest_framework import serializers
from .models import lead


class leadSerializers(serializers.ModelSerializer):
    class Meta:
        model = lead
        fields = '__all__'
