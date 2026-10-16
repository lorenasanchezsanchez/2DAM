from setuptools import setup, find_packages

# Read requirements from temaMaterialLorena/requirements.txt
import os
requirements_path = os.path.join(os.path.dirname(__file__), 'temaMaterialLorena', 'requirements.txt')
with open(requirements_path) as f:
    install_requires = [line.strip() for line in f if line.strip() and not line.startswith('#')]

setup(
    name='temaMaterialLorena',
    version='1.0.0',
    packages=['temaMaterialLorena', 'temaMaterialLorena.extensions', 'temaMaterialLorena.plugins', 'temaMaterialLorena.templates'],
    include_package_data=True,
    package_data={
        'temaMaterialLorena': ['templates/*', 'templates/**/*'],
    },
    install_requires=install_requires,
    entry_points={
        'mkdocs.themes': [
            'temaMaterialLorena = temaMaterialLorena.templates',
        ],
        'mkdocs.plugins': [
            'temaMaterialLorena/enviorment = temaMaterialLorena.plugins.enviorment:EnviormentPlugin',
            'temaMaterialLorena/functions = temaMaterialLorena.plugins.functions:FunctionsPlugin',
            'temaMaterialLorena/sectionicons = temaMaterialLorena.plugins.sectionicons:SectionIconsPlugin',
        ],
    },
)
