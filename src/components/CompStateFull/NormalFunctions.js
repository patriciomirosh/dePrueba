import jQuery from 'jquery/dist/jquery.js';
export const handleInputChangeNormal=(event) =>{
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });}

 jQuery('document').ready(($)=> {

      var menuBtn = $('.dropDownMenu'),
          menu = $('.access ul');
  
      menuBtn.click(function() {
  
          if( menu.hasClass('show') ) {
  
              menu.removeClass('show')
  
          } else {
  
              menu.addClass('show');
  
          }
  
      });
  
  });
  