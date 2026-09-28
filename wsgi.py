"""
WSGI config for twitter_clone project.
"""
import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'twitter_clone.settings')
application = get_wsgi_application()
