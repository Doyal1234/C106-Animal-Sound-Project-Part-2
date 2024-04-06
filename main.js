function start() {
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yW1c63h9C/model.json',modelLoaded);
}
function modelLoaded() {
    classifier.classify(gotResults);
}
function gotResults(error,result){
if(error) {
console.log(error);
}
else{
console.log(result);
}
}