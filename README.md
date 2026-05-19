# React + Vite

### NO BORRAR

## CALCULOS DE GRAFICOS PARA EXCEL (GRAFICO 3 POR AHORA)
- Solo si fueron entrenados
-6876
Si no fueron entrenados
3124
Si fueron seleccionados
7374
Si no fueron seleccionados
2626
Si fueron entrenados y seleccionados
5110
Si no fueron entrenados ni seleccionados
860
Si fueron entrenados pero no seleccionados
1766
Si no fueron entrenados pero si seleccionados
2264

Entrenados y no entrenados
10000
Seleccionados y no seleccionados
10000
Mezcla de seleccionados y entrenados
10000

## OPERACIONES
Solo si fueron entrenados
=CONTAR.SI.CONJUNTO(T:T,"Yes")
Si no fueron entrenados
=CONTAR.SI.CONJUNTO(T:T,"No")
Si fueron seleccionados
=CONTAR.SI.CONJUNTO(U:U,1)
Si no fueron seleccionados
=CONTAR.SI.CONJUNTO(U:U,0)
Si fueron entrenados y seleccionados
=CONTAR.SI.CONJUNTO(T:T,"Yes",U:U,1)
Si no fueron entrenados ni seleccionados
=CONTAR.SI.CONJUNTO(T:T,"No",U:U,0)
Si fueron entrenados pero no seleccionados
=CONTAR.SI.CONJUNTO(T:T,"Yes",U:U,0)
Si no fueron entrenados pero si seleccionados
=CONTAR.SI.CONJUNTO(T:T,"No",U:U,1)

Entrenados y no entrenados
=SUMA(W2 + W4)
Seleccionados y no seleccionados
=SUMA(W6 + W8)
Mezcla de seleccionados y entrenados
=SUMA(W10 + W13 + W15 + W17)