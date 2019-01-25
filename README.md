# Web App "AlertApp"

Una de las principales preocupaciones en cualquier comunidad es sin duda el tema la inseguridad en la ciudad. La prevención de delitos es una tarea que se debe hacer conjuntamente entre el gobierno y la sociedad, es por ello que nace **AlertApp**, una herramienta sencilla y eficaz de seguridad vecinal que abre un canal de comunicación y organización entre vecinos, por medio de mensajes de texto con contenido delicado, codificados o decodificados, que los mantengan informados y atentos para que ellos y sus familias vivan más tranquilos, y atentos ante cualquier amenaza.

**AlertApp** permite cifrar y descifrar texto a partir de un algoritmo de cifrado,[cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher), alertando a los vecinos sobre un tema en particular de forma totalmente confidencial.

El **cifrado** es un procedimiento que utiliza un algoritmo de cifrado con cierta clave (clave de cifrado) para transformar un mensaje, de tal forma que sea incomprensible o, al menos, difícil de comprender a toda persona que no tenga la clave secreta (clave de descifrado) del algoritmo. 

En resumen **AlertApp**, ofrece la seguridad de que nadie que no sepa la contraseña podrá leer un texto y la comodidad de tener un pequeño código que se pueda pegar donde sea y descifrar desde cualquier plataforma siempre que se tenga acceso a Internet.

##Definición del producto

####Usuario

Esta web app va dirigida principalmente a los líderes de familia en el hogar que pertenecen a una comunidad,colonia, zona habitacional o barrio, dentro de la Ciudad de México; con computadora y/o teléfono celular con acceso a internet, además de un especial interés por resolver el tema de la inseguridad y delincuencia dentro de su colonia y/o ciudad.

####Objetivos del usuario

El usuario de **AlertApp** se preocupa por el bienestar de su famila y vecinos, su inquietud principal en este rubro es el tema de la inseguridad y la delincuencia dentro de su colonia y/o ciudad. Es un usuario activo, participativo y proactivo que se mantiene informado y atento ante temas de seguridad, comunicación y organización entre vecinos, cuyo interés principal es la prevención y denucia ante cualquier amenaza.

Por lo anterior, y entiendiendo a sus usuarios, **AlertApp** fomenta acciones de prevención de la violencia y la delincuencia, para que tengan la confianza total de reportar y denunciar los problemas y/o alternativas de solución que vulneren el orden y la paz pública de su comunidad, y así lograr un acercamiento entre vecinos permitiendo una buena comunicación mediante redes de información y alerta, de apoyo recíproco y estrechamiento de lazos de solidaridad entre vecinos.

##User Experience Design (UX)

####Ideación

**AlertApp** surge de la idea de implementar proyectos para la prevención social de la violencia, impulsando el empoderamiento comunitario y la formación de ciudadanos responsables, informados y respetuosos de la ley, a través de la comunicación y organización de los mismos ante cualquier posible amenaza en su colonia, para la prevención del delito y/o la atención y apoyo oportuno a sus víctimas.
 
####Proceso y decisiones de diseño

El proceso para determinar la experiencia del usuario cuando use **AlertApp** fue idear una aplicación atractiva, clara e intuitiva, con pocos elementos visuales para hacerla de fácil acceso y por tanto útil para sus usuarios en caso de encontrarse en situación de emergencia. 

Partiendo de estos principios, se hizo uso de una paleta de color con solo 3 colores (todos en tonalidades verdes) más el color blanco, creando un ambiente relajante, de seguridad y confianza.

El logo de **AlertApp** incluye un icono en forma de casa, para hacer evidente a los usuarios el tema de la aplicación.

Los botones fueron diseñados para ser encontrados rápidamente en la pantalla, mediante el uso de la forma convencional de un cta. y así hacer aún mas rápida e inmediata su ubicación y uso. 

En caso de requerir información mas puntual a cerca de la aplicación, se decidió incluir en el footer, como apoyo, una explicación breve y concisa del uso de esta herramienta.

##Interfaz de usuario (UI)

Para cifrar o descifrar un texto usando **AlertApp**, simplemente hay que:

- Entrar a la aplicación web.
- Ingresar un desplazamiento, (_Clave_), indicando cuántas posiciones queremos que el cifrado desplace cada caracter. 
- Insertar el mensaje (_"Tu mensaje"_) que queremos cifrar. 
- Dar click en el botón: (_"Cifrar"_) o (_"Descifrar"_).
- Ver el resultado del mensaje cifrado o descifrado, que estará disponible para copiar y envíar a los vecinos.

##Consideraciones Técnicas

La lógica del proyecto está implementada completamente en JavaScript (ES6).
**No** fueron usadas librerías ni frameworks. Se usó VanillaJS.
