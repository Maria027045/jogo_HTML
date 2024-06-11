function continuar() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> A noite você fazia a janta enquanto sua filha brincava na sala quando de repente ela começa a chamar por um “amigo” mas ela estava sozinha,o que fazer?: </h3>';
  formation += '<img src="">';
  formation += '<br>';
  formation += '<button class="botoes" onclick="Escolha1()">chamar ela</button>';
  formation += '<button class="botoes" onclick="Escolha2()">ignorar</button>';
  $(".principal").append(formation);
}


function Escolha1() {
  var formation = '';
  formation += '<br>';
  formation += '<h3>você chamou ela e ela apenas veio até você e ficou em um canto sentada te vendo cozinhar em silêncio e você ignorou. Você termina a janta e arruma a mesa, na hora de colocar os talheres surgiu uma dúvida. coloca uma faca para sua filha comer?:. </h3>';
  formation += ' <img src="">';
  formation += '<br>';
  formation += '<button class="botoes" onclick="Escolha11()">sim</button>';
  formation += '<button class="botoes" onclick="Escolha12()">Não</button>';
  $(".principal").append(formation);
}

function Escolha11() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> sua filha te mata esfaqueada, e  antes de você morrer , você enxerga uma criatura assustadora atrás da sua filha.Parece que o amigo da sua filha não era tão legal assim. Reinicie  o jogo. </h3>';
  formation += '<br>'
 
  $(".principal").append(formation);
}


function Escolha12() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> o jantar ocorre normalmente.Após o jantar você coloca sua filha na cama , mas antes de você sair ela pede para você olhar embaixo da cama pois ela achava que tinha um monstro,o que você faz?</h3>'
  formation += '<br>'
  formation += '<button class="botoes" onclick="Escolha121()">Olhar em baixo da cama</button>';
  formation += '<button class="botoes" onclick="Escolha122()">Não olhar</button>';
  $(".principal").append(formation);
}

function Escolha121() {
  var formation = '';
  formation += '<br>';
  formation += '<h3>você olha e como já esperado não tinha nada, você sai do quarto da sua filha mas ainda com a sensação de estar sendo observada mas vai dormir mesmo assim.</h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha122() {
  var formation = '';
  formation += '<br>';
  formation += '<h3>Você não olha e simplesmente sai do quarto e nada acontece, mas durante a noite você tem vários pesadelos onde sua filha é levada por uma criatura assustadora.</h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha2() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> você ignorou sua filha conversando com esse tal amigo,crianças nessa idade falam sozinhas mesmo você pensou.Mas então você ouve um grito, o que fazer? </h3>';
  formation += '<img src="">';
  formation += '<br>';
  formation += '<button class="botoes" onclick="Escolha21()">levar algo para se proteger</button>';
  formation += '<button class="botoes" onclick="Escolha211()">Não levar nada</button>';
  $(".principal").append(formation);
}

function Escolha21() {
  var formation = '';
  formation += '<br>';
  formation += '<h3>Você foi com uma faca mas ao chegar na sala sua filha ria sozinha , mas você sentia ainda alguém te observando.Você volta para a cozinha e  terminar a janta e arruma a mesa, na hora de colocar os talheres surgiu uma dúvida. coloca uma faca para sua filha comer? . </h3>';
  formation += '<img src="">';
  formation += '<br>';
  formation += '<button class="botoes" onclick="Escolha11()">Sim</button>';
  formation += '<button class="botoes" onclick="Escolha12()">Não</button>';
  $(".principal").append(formation);
}


function Escolha211() {
  var formation = '';
  formation += '<br>';
  formation += '<h3>Quando você chega na sala não vê sua filha e de repente sente algo acertando sua cabeça e você desmaiou e acordou em um caixão e ouvindo barulho de terra caindo por cima da tampa,você morre sufocada.reinicie o jogo </h3>';
  formation += '<img src="">';
  formation += '<br>';
  $(".principal").append(formation);
}

