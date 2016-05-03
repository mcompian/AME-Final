var fileUploaded = function () {
    var file = $('#theFileUploader').get(0);
    var fileObj = $('#theFileUploader').get(0).files[0]
    var filename = fileObj.name;
    var ext = filename.split(".");
    ext = ext[ext.length - 1];
    console.log(ext);
    var fd = new FormData();
    var fileInput = "s3Upload_" + new Date().getTime().toString() + "." + ext;
    fd.append('fileInput', fileInput);
    fd.append('input', file.files[0]);
    fd.append('date', (new Date()).toString());
    //fd.append('data', data);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState != 4) {
            return;
        }
        // callback logic
        alert("done");
    };
    xhr.open("POST", "/uploadFile", true);
    xhr.send(fd);
}