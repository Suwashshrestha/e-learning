from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth


def Homepage(request):
    return render(request, "index.html")



def Signup(request):
    if request.method=='POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']

        data = User.objects.create_user(username=username,email=email,password=password)
        data.save()
        # return redirect(request, "signin.html")
    
    return render(request, "signup.html" )

def Signin(request):
    if request.method=="POST":
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request.user)
            return redirect('dashbord.html')
    
    return render(request, "signin.html")

def Dashbord(request):
    return render(request, 'dashbord.html')