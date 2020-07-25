from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from django.contrib.auth import authenticate


# user registraion
class registrationSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}
    

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],
        validated_data['email'], validated_data['password'])
        return user

# user serializer
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

# login serializer
class loginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)

        if user and user.is_active :
            return user
        raise serializers.ValidationError('Incorrect credentials')