//Account Class

	class Account
	{
		private:
			var email = "none";
			var password = "none";

		public:
			constructor(email, password)
			{
				this.Email = email;
				this.Password = password;
			}
		//getter and setter functions
		get_Email()
		{
			return this.email;
		}
		get_Password()
		{
			return this.password;
		}
		set_email(email){
			this._Email = email;
		}
		set_password(password){
			this._Password = password;
		}
	};
