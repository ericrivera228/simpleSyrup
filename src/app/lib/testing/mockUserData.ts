import { User } from '../domain/user';

export class MockUserData{

	static user1: User = new User();
	static user2: User = new User();
	static user3: User = new User();
	static user4: User = new User();
	static user5: User = new User();
	static user6: User = new User();
	static user7: User = new User();
	static user8: User = new User();
	static user9: User = new User();
	static user10: User = new User();
	static user11: User = new User();
	static user12: User = new User();
	static user13: User = new User();
	static user14: User = new User();
	static user15: User = new User();
	static user16: User = new User();
	static user17: User = new User();
	static mockUserData: User[] = [];

	static intialize(){

		MockUserData.user1.firstName = "";
		MockUserData.user1.id = 1;
		MockUserData.user1.lastName = "Leger";
		MockUserData.user1.photoUrl = "/assets/img/mumbo_jumbo.png";

		MockUserData.user2.firstName = "Eric";
		MockUserData.user2.lastName = "Johnson";
		MockUserData.user2.id = 2;
		MockUserData.user2.email = "ericrivera228@gmail.com";
		MockUserData.user2.photoUrl = "/assets/img/happy_eric.jpg";

		MockUserData.user3.firstName = "Irina";
		MockUserData.user3.lastName = "Runner";
		MockUserData.user3.id = 3;
		MockUserData.user3.photoUrl = "/assets/img/irina.jpg";

		MockUserData.user4.firstName = "Ian";
		MockUserData.user4.lastName = "Pillow";
		MockUserData.user4.id = 4;

		MockUserData.user5.firstName = "Justin";
		MockUserData.user5.lastName = "Rabbit";
		MockUserData.user5.id = 5;
		MockUserData.user5.photoUrl = "/assets/img/justin.jpg";		

		MockUserData.user6.firstName = "Taylor"
		MockUserData.user6.id = 6;
		MockUserData.user6.lastName = "Table";

		MockUserData.user7.firstName = "Regina";
		MockUserData.user7.id = 7;
		MockUserData.user7.lastName = "Leger";

		MockUserData.user8.firstName = "Andrea";
		MockUserData.user8.lastName = "Tree";	
		MockUserData.user8.id = 8;	

		MockUserData.user9.firstName = "Ace";
		MockUserData.user9.lastName = "Train";
		MockUserData.user9.id = 9;

		MockUserData.user10.firstName = "Homeless";
		MockUserData.user10.lastName = "Guy";
		MockUserData.user10.id = 10;

		MockUserData.user11.firstName = "Mr. Cool";
		MockUserData.user11.lastName = "Guy";
		MockUserData.user11.id = 11;

		MockUserData.user12.firstName = "Nathan";
		MockUserData.user12.lastName = "Drake";
		MockUserData.user12.id = 12;
		MockUserData.user12.photoUrl = "/assets/img/Nathan_drake.jpg"

		MockUserData.user13.firstName = "Timbo";
		MockUserData.user13.lastName = "Baggins";
		MockUserData.user13.id = 13;

		MockUserData.user14.firstName = "Jason";
		MockUserData.user14.lastName = "Twirly";
		MockUserData.user14.id = 14;
		
		MockUserData.user15.firstName = "Lee";
		MockUserData.user15.lastName = "Russell";
		MockUserData.user15.id = 15;
		
		MockUserData.user16.firstName = "Neil";
		MockUserData.user16.lastName = "Gamby";
		MockUserData.user16.id = 16;

		MockUserData.user17.firstName = "Tim";
		MockUserData.user17.lastName = "Lake";
		MockUserData.user17.id = 17;

		MockUserData.mockUserData.push(MockUserData.user1, MockUserData.user2, MockUserData.user3, MockUserData.user4, MockUserData.user5, MockUserData.user6, MockUserData.user7, MockUserData.user8, MockUserData.user9, MockUserData.user10, MockUserData.user11, MockUserData.user12, MockUserData.user13, MockUserData.user14, MockUserData.user15, MockUserData.user16, MockUserData.user17);

	}

}

MockUserData.intialize();