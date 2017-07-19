class UsersController < ApplicationController
  skip_before_action :authenticate, only: :create

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      jwt = Auth.issue({user: @user.id})
      render json: {jwt: jwt}
    else 
      render json: {error: "Sign up failed."}, status: 500
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
