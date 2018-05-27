// JavaScript Document
$(document).ready(function(e) {
	document.addEventListener("deviceready",function(){ //escuchador de enventos
		$('#Izquierda').on("swipeleft",function(){//deslizar a la izquierda
		navigator.notification.alert("Deslizó hacia la Izquierda",function(){"aplicación 7", "ok"});//aparece mensaje
		});//cierra swipe izquierda
		$('#Derecha').on("swiperight",function(){//deslizar derecha
		navigator.notification.confirm("¿Que quieres hacer?",function(op){//aparece mensaje para confirmar
			switch(op)//valiable op para las acciones
			{
				case 1:
				navigator.notification.beep(1);//suena el dispositivo
				break;
				
				case 2:
				navigator.notification.vibrate(3000);//vibra el dispositivo
				break;
			}
		},"aplicacion7","Beepear,Vibrar,Cancelar");
		});
     },false);
	});
  