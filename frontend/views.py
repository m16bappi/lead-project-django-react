from django.shortcuts import render


def FrontendView(request):
    return render(request, 'index.html', {})
