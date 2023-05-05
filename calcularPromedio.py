class CalculadoraPromedio:
    def __init__(self):
        self.numeros = []
        self.totalNumeros = 0
        self.limiteInferior = 0
        self.sumaNumeros = 0
        self.promedio = 0

    def ingresar_limite_inferior(self):
        self.limiteInferior = int(input("Ingrese el límite inferior: "))

    def ingresar_cantidad_numeros(self):
        self.totalNumeros = int(input("Ingrese la cantidad de números a calcular (máximo 100): "))

    def ingresar_numeros(self):
        print("Ingrese los números:")
        for i in range(self.totalNumeros):
            numero = int(input(f"Número {i + 1}: "))
            self.numeros.append(numero)

    def calcular_promedio(self):
        self.sumaNumeros = sum(self.numeros)
        self.promedio = self.sumaNumeros / self.totalNumeros

    def mostrar_resultados(self):
        print("Listado de números:")
        for i in range(self.totalNumeros):
            print(f"Número {i + 1}: {self.numeros[i]}")
        print(f"El promedio de los números ingresados es: {self.promedio}")

    def calcular(self):
        self.ingresar_limite_inferior()
        self.ingresar_cantidad_numeros()
        self.ingresar_numeros()
        self.calcular_promedio()
        self.mostrar_resultados()


calculadora = CalculadoraPromedio()
calculadora.calcular()
