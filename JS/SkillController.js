$(document).ready(function(){

  /* Donées */
  var listLanguages = [
     {
       'name':'HTML',
       'icon': 'devicon-html5-plain-wordmark',
       'niveau': 80,
     },
     {
       'name':'CSS',
       'icon': 'devicon-css3-plain-wordmark',
       'niveau': 40,
     },
     {
       'name':'javascript',
       'icon': 'devicon-javascript-plain',
       'niveau' : 30,
      },
      {
        'name':'PHP',
        'icon': 'devicon-php-plain',
        'niveau' : 60,
      },
      {
        'name':'mysql',
        'icon': 'devicon-mysql-plain-wordmark',
        'niveau' : 50,
       },
     {
       'name':'JAVA',
       'icon': 'devicon-java-plain-wordmark',
       'niveau' : 10,
      },
  ];

  var listFrameworks = [
     {
       'name':'Symfony',
       'icon': 'devicon-symfony-original-wordmark',
       'niveau' : 3
     },
     {
       'name':'Bootstrap',
       'icon': 'devicon-bootstrap-plain-wordmark',
       'niveau' : 4
     },
     {
       'name':'Sass',
       'icon':'devicon-sass-original',
       'niveau' : 2
     },
      {
        'name':'Jquery',
        'icon': 'devicon-jquery-plain-wordmark',
        'niveau' : 3
      },
      {
        'name':'AngularJs',
        'icon': 'devicon-angularjs-plain',
        'niveau' : 2
      },
  ];

  var listOs = [
    {
      'name':'Linux',
      'icon': 'devicon-linux-plain',
      'niveau' : 3
    },
    {
      'name':'Window',
      'icon': 'devicon-windows8-original',
      'niveau' : 2
    },
    {
      'name':'Android',
      'icon': 'devicon-android-plain-wordmark',
      'niveau' : 1
    },
  ];

  var listIde = [
    {
      'name':'Atom',
      'icon': 'devicon-atom-original',
      'niveau' : 3
    },
    {
      'name':'Netbean',
      'icon': 'devicon-atom-original',
      'niveau' : 3
    },
    {
      'name':'Eclipse',
      'icon': 'devicon-atom-original',
      'niveau' : 1
    },
    {
      'name':'AndroidStudio',
      'icon': 'devicon-atom-original',
      'niveau' : 1
    },
  ];

  var listGraphic = [
    {
      'name':'Gimp',
      'icon': 'devicon-gimp-plain',
      'niveau' : 2
    },
    {
      'name':'Photoshop',
      'icon': 'devicon-photoshop-plain',
      'niveau' : 3
    },
    {
      'name':'InDesign',
      'icon': 'devicon-trello-plain-wordmark',
      'niveau' : 4
    },
    {
      'name':'Pencil',
      'icon': 'devicon-trello-plain-wordmark',
      'niveau' : 4
    },
  ]

  var listDb = [
    {
      'name':'Workbench',
      'icon': 'devicon-trello-plain-wordmark',
      'niveau' : 2
    },
    {
      'name':'phpMyAdmin',
      'icon': 'devicon-trello-plain-wordmark',
      'niveau' : 4
    },
    {
      'name':'Doctrine',
      'icon':'devicon-doctrine-plain-wordmark',
      'niveau' : 2
     },
  ];

  var listTools = [
     {
       'name':'Bitbucket',
       'icon': 'devicon-bitbucket-plain-wordmark',
       'niveau' : 4
     },
     {
       'name':'Bower',
       'icon': 'devicon-bower-plain',
       'niveau' : 2
     },
     {
       'name':'Git',
       'icon': 'devicon-git-plain-wordmark',
       'niveau' : 3
     },
     {
       'name':'Github',
       'icon': 'devicon-github-plain-wordmark',
       'niveau' : 4
     },
     {
       'name':'Trello',
       'icon': 'devicon-trello-plain-wordmark',
       'niveau' : 4
     },
    ];

/* ------- Fonction --------- */

/**
 * Construit un bloc progress-bar pour chaque compétence de langages
 */
function createBar(){
  $.each(listLanguages, function(key,value){
    $('#listLanguages').append('<div class="skill-'+value['name']+'">'+
      '<div class="btn-skill">'+
        '<i class="icon '+value['icon']+'"></i>'+
      '</div>'+
    '</div>')
    $('.skill-'+value['name']).circleProgress({
      value: value['niveau']/100,
      startAngle: -Math.PI / 4 * 2,
      reverse: true,
      size: 80.0,
      fill: {
        color:'#243f46' // or color: '#3aeabb', or image: 'http://i.imgur.com/pT0i89v.png'
      },
    });
  });
}

/**
 * Construit les notations sur 5
 * @param array list, tableau contenant la compétence
 * @param str skill, nom de la classe
 * @param idSkill int idSkill, numéro id de la compétence
 */
function createPills(list,skill,idSkill){
  for(var i = 1; i <=5; i++){
    console.log(list[idSkill]);
    if(list[idSkill]['niveau'] >= i ){
      $('.'+skill).append('<i class="fa fa-circle"></i>');
    }else{
      $('.'+skill).append('<i class="fa fa-circle-thin"></i>');
    }
  }
}

/**
 * Construit une liste de compétence à partir d'un tableau
 * @param array list, tableau contenant une liste de compétence
 * @param str divId, classe ou id de div
 */
function createList(list,divId){
  $.each(list, function(key,value){
    $(divId).append(
      '<p class="li-skill '+value['name']+'"> <span class="col-xs-8 col-sm-8 col-md-8"><i class="'+value['icon']+'"></i> '+value['name']+'</span> </p>'
    );
    createPills(list,value['name'],key);
  });
}

/* -----------  Controller  --------- */

createBar();
createList(listOs,'#listOs');
createList(listFrameworks, '#listFrameworks');
createList(listTools, '#listTools');
createList(listDb, '#listDb');
createList(listGraphic, '#listGraphic');
createList(listIde, '#listIde');

});
