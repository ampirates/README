# README
// energia como moeda de troca para redução de cascata de impostos

//hipotese 1 : energia é comodity que cresceu de valor no brasil em 11,6% ao ano nos últimos 10 anos.

//hipotese 2: a regulamentaço no brasil (REN ANEEL 482/12 e 687/15) diz que a energia renovável pode ser autoproduzida e transformada em crédito utilizando a rede como bateria, inclusive para ser consumida em outra unidade consumidora.

//hipotese 3: modelo de locação de gerador solar - energia de geração distribuída não pode ser vendida em R$/kWh

//hipótese 4: Solar permite até 20% de sobre potência e.g. 75kW com 90 kW pico de somatrio de placas

var potenciaGerador = [75, 1000, 5000] ;                    // [ kW ] 
var tensaoRede;                                             // [ V ]        Volts
var tempo;                                                  // [ h ]      
var energia;                                                // [ kWh ]    
var custoGerador;                                           // [ R$ ]        FIAT
var tarifaDistribuidora = [ ] ;                             // [ R$ / kWh ] 
var pingoRede = true ;                                      // boolean
var HSP = [ ] ;                                             // 
var eficienciaSistema;                                      // [ - ] 
var inflacao;                                              // [ % ]
var estabelecimentos = [ ] ; 

var producaoEnergia = function( potenciaGerador, tempo, eficiencia, HSP ) { 
  energia = ( potenciaGerador * tempo * eficiencia * HSP ); 
  } ;

var custoLocacao = function (producaoEnergia, desconto, tarifaDistribuidora) {
  for ( i = 1 ; i > 26 ; i++) { 
    valorLocacao = producaoEnergiaAnual * ( tarifaDistribuidora * ( 1 + ( inflacao ^ i ))) ;
    } ;
  } ;
  
var adicionarEstabelecimento = function ( novoEstabelecimento, tabelaDescontos, custoEnergiaMedio) {
  nomesEstabelecimentos.append(novoEstabelecimento),
  novoEstabelecimentos.tabelaDescontos = tabelaDescontos,
  novoEstabelecimentos.custoEnergiaMedio = custoEnergiaMedio,
  } ;

var adicionarUsuarioFinal = function ( investimentoInicial, mensalidade, prazoMensalidade, estabelecimentosFavoritos ) {

  }


DataBase: { 

HSP = [ 
        curitiba, 5,4;
        saoPaulo, 5,8;
        londrina, 5,8;
        salvador, 6,2;
      ]                   // [ cidade, [ kWh / m2 / dia] ] 
  
Custos: { 
  if( potenciaGerador > 75kW ) {
    tensaoRede: BT,                                     //  tensao = 0,11kV / 0,22kV - conexão em baixa tensão
    custoGerador: [ 400mil telhado ; 450mil solo], 
    tarifaDistribuidora: [ R$0,60 ; ... ; R$0,90], 
    pingoRede: True,
    } 
  
  if(potenciaGerador > 1MW ) { 
    tensaoRede: MT,                                     //  tensao = 13,8kV / 34,5kV - conexão em média tensão
    custoGerador: [ 4mi telhado ; 5mi solo], 
    tarifaDistribuidora: [ R$0,40 ; ... ; R$0,55], 
    pingoRede: True,                                    // limite do pingo na rede 
    }

  if(potenciaGerador > 5MW ) { 
    tensaoRede: MT,                                     //  tensao = 13,8kV / 34,5kV - conexão em média tensão
    custoGerador: [ 20mi telhado ; 25mi solo],          // mais conexão com rede
    tarifaDistribuidora: [ R$0,18 ; ... ; R$0,25], 
    pingoRede: False,                                    // limite do pingo na rede 
    
    // conexão complexa, necessidade de conexão direta em subestação
    // solicitação de acesso à rede para verificar se há bay livre para conexão na subestação mais próxima
    // sem bay livre - custo e obra de reforço - no mínimo 1 ano
    }
} 
