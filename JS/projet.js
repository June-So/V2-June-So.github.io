$(document).ready(function(){

/* ----------  Template  ---------- */

  /**
   * Création d'un template objet a partir d'une liste
   */
  function createProject(){
    $.each(listProjects, function(key,value){
      $('#indexProject').append('<div class="col-md-12">'+
          '<div class="col-md-3">Image</div>'+
          '<div class="info-'+key+' col-md-6">'+
            '<h3>'+value['name']+'</h3>'+
            '<p>'+value['resume']+'</p>'+
          '</div>'+
          '<div class="col-md-3">'+
            value['state']+'<br/>'+
            'Liens du projets'+
          '</div>'+
        '</div>');
        createTag(key);
    });
  }
  function createProjectV2(){
    $.each(listProjects, function(key,value){
      $('#indexProject').append('<div class="col-sm-6 col-md-3 project bg-white">'+
          '<p class="bold-dark">'+value['date']+'</p>'+
          '<div class="info-'+key+' col-md-12">'+
            '<h3>'+value['name']+'</h3>'+
            '<p>'+value['state']+'</p>'+
            '<p>'+value['resume']+'</p>'+
          '</div>'+
          '<p class="icon-link"><a href="'+value['link']['url']+'"><i class="'+value['link']['icon']+'"></i></a></p>'+
        '</div>');
        createTag(key);
    });
  }

  function createTag(id){
    $.each(listProjects[id]['tag'], function(key,value){
      $('.info-'+id).append('<span class="badge">'+value+'</span>');
    })
  }

/* -----------  Controller ---------- */

createProjectV2();

});
