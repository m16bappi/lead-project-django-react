from rest_framework import permissions, viewsets

from .models import lead
from leads.serializers import leadSerializers


class leadViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]

    serializer_class = leadSerializers

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

