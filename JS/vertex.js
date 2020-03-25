// attribute는 buffer로부터 데이타를 받을 것입니다.
attribute vec4 a_position;
 
// 모든 shader는 main 함수를 가집니다.
void main() {
  // gl_Position은 버텍스 셰이더에서
  // 설정을 담당하는 특수한 변수입니다.
  gl_Position = a_position;
}
GLSL로 작성된 위 코드가 어떻게 호출되고 실행되는지 이해하기 쉽게 JavaScript로 작성해 본다면 다음과 비슷할 겁니다.

// *** PSUEDO CODE!! ***
  
var positionBuffer = [
  0, 0, 0, 0,
  0, 0.5, 0, 0,
  0.7, 0, 0, 0,
];
var attributes = {};
var gl_Position;
  
drawArrays(..., offset, count) {
  var stride = 4;
  var size = 4;
  for (var i = 0; i < count; ++i) {
     // positionBuffer에서 4개의 값을 a_position에 복사합니다.
     attributes.a_position =
        positionBuffer.slice((offset + i) * size, size);
     runVertexShader();
     ...
     doSomethingWith_gl_Position();
}
