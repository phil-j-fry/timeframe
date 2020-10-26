let form_markup = `<form>
<div class="form-group">
    <label for="InputEndpoint">URL</label>
    <input type="email" class="form-control" id="InputEndpoint" placeholder=" Endpoint">
</div>
<div class="form-group">
    <label for="InputKey">Key</label>
    <input type="password" class="form-control" id="InputKey" placeholder="Key">
</div>
<div class="form-group">
    <label for="exampleGroupTitle">RPM</label>
    <label class="radio-inline">
    <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> 1 min
    </label>
    <label class="radio-inline">
    <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> 5 min
    </label>
    <label class="radio-inline">
    <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"> 10 min
    </label>
</div>`;


$("#btn-new-custom-endpoint").click(function(){
    $("#custom-placeholder").append(form_markup);
    });
