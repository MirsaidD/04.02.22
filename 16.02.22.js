document.querySelector('input[type="text"]').addEventListener('focus', function () {
  this.style.borderColor = (initial);
});

document.querySelector('input[type="text"]').addEventListener(blur, function () {
  if (!this.value) {
    this.style.borderColor = "red";
  }
});

document.querySelector('input[type="text"]').addEventListener('change', function () {
  alert('Chenged');
});

document.querySelector('input[type="checkbox"]').addEventListener('change', function () {
  if (this.checked) {
    alert('You are Employed');
  }
  else {
    alert('You are UnEmployed');
  }
});