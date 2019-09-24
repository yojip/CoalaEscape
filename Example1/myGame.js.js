room = game.createRoom("room", "배경-8.png") // 방 생성
game.start(room) //게임시작
printMessage("효진이의 방탈출에 오신 것을 환영합니다.")

room.door = room.createObject("door", "문-우-닫힘.png") // 문 생성
room.door.setWidth(140) // 크기 조절
room.locateObject(room.door, 1049, 275) // 문 배치

room.shelf = room.createObject("shelf", "선반-좌.png")
room.shelf.setWidth(600)
room.locateObject(room.shelf, 300, 200)

room.book = room.createObject("book", "책1-1.png")
room.book.setWidth(80)
room.locateObject(room.book, 100, 210)

room.book.onClick = function() {
	showImageViewer("종이.png", "중앙대학교.txt"); // 이미지와 텍스트 파일 출력
}





room.door.lock() // door 상태를 locked로 변경


room.door.onClick = function() { // door를 클릭했을 때

	if (room.door.isClosed()) { // door가 closed 상태이면

		room.door.open() // door의 상태를 open으로 바꿈

	}
	else if (room.door.isOpened())
	{ // door가 opened 상태이면

		game.clear() // 게임 클리어
	}
	else if (room.door.isLocked())
	{
		// door가 locked 상태이면

		printMessage("문이 잠겨있다") // 메시지 출력
	}
}


room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행

	room.door.setSprite("문-우-열림.png")
		// 열린 문으로 변경
}


room.keypad = room.createObject("keypad", "숫자키-우.png") // 오브젝트 생성

room.keypad.setWidth(50) // 크기 조절

room.locateObject(room.keypad, 930, 250) // 위치 변경


room.keypad.onClick = function() {

	printMessage("중앙대학교의 개교 년도는?")

		showKeypad("number", "1918", function(){ // 키패드 1 - 숫자4자리

		room.door.unlock() // door의 잠금을 연다

			printMessage("잠금장치가 열리는 소리가 들렸다.")

	})
}

game.start(room)


