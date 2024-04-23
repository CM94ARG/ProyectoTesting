import requests

url = "https://swapi.py4e.com/api/people/12313212/"

response = requests.get(url)

# Imprimir el código de estado de la respuesta
print("Código de estado:", response.status_code)

if response.status_code == 200:
    data = response.json()
    print("Nombre: ", data["name"])
    print("Altura: ", data["height"])
    print("Peso: ", data["mass"])
    print("Color de cabello: ", data["hair_color"])
    print("Color de piel: ", data["skin_color"])
    print("Color de ojos: ", data["eye_color"])
else:
    print("Está OK")
