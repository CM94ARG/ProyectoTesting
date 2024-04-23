import requests

url = "https://swapi.py4e.com/api/people/1/"

response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    print("Nombre: ", data["name"])
    print("Altura: ", data["height"])
    print("Peso: ", data["mass"])
    print("Color de cabello: ", data["hair_color"])
    print("Color de piel: ", data["skin_color"])
    print("Color de ojos: ", data["eye_color"])
else:
    print("No se pudo obtener la información API")
