'reset'
'set lat -65 -5'
'set lon 250 350'
'set mpdset mres'
time = 1
maskout=3000
'run jaecol.gs'
'set mpdset hires'
'set map 79 1 5'
'set ylpos 0 l'
'set xlint 5'
'set ylint 5'
'set xlopts 1 4 0.12'
'set ylopts 1 4 0.12'
'set clopts -1 4 0.09'
'set poli on'
while(time<121)
'set t 'time
***---***
*Para la fecha correspondiente
'q time'
line1=sublin(result,1)
itime1=subwrd(line1,3)
fecha=substr(itime1,1,12)
***---***
*DEFINIENDO LAS VARIABLES
say 'DEFINIENDO LAS VARIABLES NIVEL 700'
'define terreno=hgtsfc(lev=1000)'
'define hr=rhprs(lev=700)'
'define asc=vvelprs(lev=700)'
***---***
'set grads off'
* HR
'set gxout shaded'
'set clevs  30 50 70 80 90 '
'set rbcols 0 13 5 11 4'
'd smth9(hr)'
'run cbarn'

* Ascensos
'set clopts -1 4 0.09'
'set ccolor 2'
'set gxout contour'
'set clevs -9 -7 -5 -3 -2.5 -2 -1.5 -1 -0.9 -0.8 -0.7 -0.6 -0.5'
'set clab on'
'set clab masked'
'set cthick 4'
'd smth9(asc)'

* Descensos
'set ccolor 1'
'set gxout contour'
'set clevs  0.5 0.6 0.7 0.8 0.9 1 1.5 2 2.5 3 5 7 9'
'set clab on'
'set cthick 4'
'd smth9(asc)'

* Terreno
'set gxout grfill'
'set clevs 1500'
'set ccols 73 73'
'd maskout(terreno,terreno-'maskout')'

'draw title 'fecha' \ 700mb: HR(%,somb), ascensos(rojo), descensos(negro)'
'printim /home/marcos/Documentos/METEOROLOGIA/GRADS/PRONOSTICO/imagenes/SYNOP/hr_700'time'.png png white'
'c'
say '************'
time=time+6
endwhile

