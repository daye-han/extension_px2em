# px2em
px2em은 Visual Studio Code에서 단위 변환을 도와주는 확장 프로그램입니다.

<br><br>
## 기능 (Features)
css의 px 단위를 em 단위로 변환해줍니다.

단위 변환시마다 기준이 될 폰트 사이즈를 입력하여 다양한 기준 폰트 사이즈로 em 단위 변환이 가능합니다.

소수점 자리수를 설정할 수 있으며 단위 변환 시 반올림하여 설정한 소수점 자리수까지 출력합니다.

또한, 변환 결과에 em 단위 추가 여부도 설정 가능합니다.



<br><br>
## 사용 (Usage)

![이미지](https://raw.githubusercontent.com/daye-han/extention_px2em/master/images/px2em_usage.gif)

1. 변환하고 싶은 값, 기준 폰트 입력
	- 입력 방식 : `(em으로 변환할 px 값)/(기준 폰트 px 값)`
	- 입력 예시

		```css
		.example {
			font-size: 14/16;
			font-size: 14px/16px;
		}
		```

2. 변환하고 싶은 값`(em으로 변환할 px 값)/(기준 폰트 px 값)`을 마우스 드래그하여 선택

3. 해당 프로그램 실행
	- 명령 팔레트( `F1` or `ctrl+shift+P` )를 표시한 후 `px2em`을 입력하여 실행하거나,

	- 단축키 `ctrl+shift+Y` 입력하여 실행


4. 변환된 값 확인



<br><br>
## 설정 (Settings)

| key                  | value(default) | type    | description                  |
|----------------------|----------------|---------|------------------------------|
| `px2em.decimalPoint` | 2              | Number  | 소수점 자리수                 |
| `px2em.unitCheck`    | true           | Boolean | 단위 변환 후 em 단위 추가 여부 |

<br>

**.vscode/settings.json**
```json
{
   "px2em.decimalPoint": 2,
   "px2em.unitCheck": true
}
```

<br>
<strong>기본 단축키 (Default Key Bindings)</strong>

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Y</kbd>

<br><br>
## 릴리즈 노트 (Release Notes)

[릴리즈 노트](https://github.com/daye-han/extention_px2em/releases)

<br><br>
## 라이선스 (License)

MIT