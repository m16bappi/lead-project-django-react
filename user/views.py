from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import registrationSerializer, UserSerializer, loginSerializer

# get registration api
class registerApiView(generics.GenericAPIView):
    serializer_class = registrationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'token': AuthToken.objects.create(user)[1]
        })

# get login api
class loginApiView(generics.GenericAPIView):
    serializer_class = loginSerializer

    def post(self, request, *arg, **kwargs):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        user = serializer.validated_data

        return Response({
            "user": UserSerializer(user, context = self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# get user api
class UserApiView(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user