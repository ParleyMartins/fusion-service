from rest_framework import serializers
from api.models import Person


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'
        extra_kwargs = {
            'addresses': {'required': False },
            'birth_date': { 'required': False }
        }
