const inp = document.querySelectorAll('input._num-only ');

let count = 0;

if (inp.length) {
  inp.forEach(input => {
    input.addEventListener('input', function () {
      count++;
      input.value = input.value.replace(/[^0-9]/, '');

      //     $('#sp_name').html(
      //       document.createTextNode('Maximun allowed characters reached')
      //     );
      //     // this.value = this.value.replace(/[a-zA-Z0-9\.\,\-\_]/,'');
      //     inp.val('');
      //     inp.blur();
      //     inp.focus();
      //     // alert('max reached');

      //   // console.log(inp.val().length);
    });
  });
}
