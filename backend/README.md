# djangoStarterPack

## setting up venv
(in a folder)
```bat
# --upgrade-deps only works on python 3.8+
py -m venv venv --upgrade-deps # remember to activate venv immediately
venv\Scripts\activate.bat # activating venv (windows cmd)
. venv/Scripts/activate # activating venv (bash/git bash)
. venv/bin/activate # activating venv (actual linux)
(venv) pip install wheel # important!
(venv) pip install -r requirements.txt
(venv) django-admin startproject app
```