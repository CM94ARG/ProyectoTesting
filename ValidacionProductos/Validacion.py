productos = [
    {"nombre": "Remera Negra", "precio": 25.99},
    {"nombre": "Jean Negro", "precio": 39.99},
    {"nombre": "Jean Azul", "precio": 42.50},
    {"nombre": "Short Futbol", "precio": 19.99},
    {"nombre": "Botines", "precio": 79.99},
    {"nombre": "Pelota N5", "precio": 12.50},
    {"nombre": "Camiseta Argentina", "precio": 49.99}
]

productos_ordenados = sorted(productos, key=lambda x: x["precio"])

# Imprimir mensaje de confirmación
print("LISTA ORDENADA OK")
