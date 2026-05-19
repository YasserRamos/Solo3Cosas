# React + Vite

### NO BORRAR

## CALCULOS DE GRAFICOS PARA EXCEL (GRAFICO 3 POR AHORA)
Solo si fueron entrenados<br/>
6876<br/>
Si no fueron entrenados<br/>
3124<br/>
Si fueron seleccionados<br/>
7374<br/>
Si no fueron seleccionados<br/>
2626<br/>
Si fueron entrenados y seleccionados<br/>
5110<br/>
Si no fueron entrenados ni seleccionados<br/>
860<br/>
Si fueron entrenados pero no seleccionados<br/>
1766<br/>
Si no fueron entrenados pero si seleccionados<br/>
2264<br/>

Entrenados y no entrenados<br/>
10000<br/>
Seleccionados y no seleccionados<br/>
10000<br/>
Mezcla de seleccionados y entrenados<br/>
10000<br/>

## OPERACIONES
Solo si fueron entrenados<br/>
=CONTAR.SI.CONJUNTO(T:T,"Yes")<br/>
Si no fueron entrenados<br/>
=CONTAR.SI.CONJUNTO(T:T,"No"<br/>)
Si fueron seleccionados<br/>
=CONTAR.SI.CONJUNTO(U:U,1)<br/>
Si no fueron seleccionados<br/>
=CONTAR.SI.CONJUNTO(U:U,0)<br/>
Si fueron entrenados y seleccionados<br/>
=CONTAR.SI.CONJUNTO(T:T,"Yes",U:U,1)<br/>
Si no fueron entrenados ni seleccionados<br/>
=CONTAR.SI.CONJUNTO(T:T,"No",U:U,0)<br/>
Si fueron entrenados pero no seleccionados<br/>
=CONTAR.SI.CONJUNTO(T:T,"Yes",U:U,0)<br/>
Si no fueron entrenados pero si seleccionados<br/>
=CONTAR.SI.CONJUNTO(T:T,"No",U:U,1)<br/>

Entrenados y no entrenados<br/>
=SUMA(W2 + W4)<br/>
Seleccionados y no seleccionados<br/>
=SUMA(W6 + W8)<br/>
Mezcla de seleccionados y entrenados<br/>
=SUMA(W10 + W13 + W15 + W17)<br/>