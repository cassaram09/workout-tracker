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

  def reports
    @user = User.find_by(id: current_user.id)
    exercise_ids = @user.exercises.where(name: 'Decline Press').pluck(:id)
    set_weights = ExerciseSet.where(exercise_id: exercise_ids).pluck(:weight)
    set_weights = []
    @weights = [
      {x: '8/9/10' , y: 135},
      {x: '8/9/10' , y: 185},
      {x: '8/9/10' , y: 225},
      {x: '8/9/10' , y: 225},
      {x: '8/9/10' , y: 225},
      {x: '8/11/10' , y: 135},
      {x: '8/11/10' , y: 185},
      {x: '8/11/10' , y: 235},
      {x: '8/11/10' , y: 235},
      {x: '8/11/10' , y: 235},
      {x: '8/13/10' , y: 135},
      {x: '8/13/10' , y: 185},
      {x: '8/13/10' , y: 245},
      {x: '8/13/10' , y: 245},
      {x: '8/13/10' , y: 245},
    ]
    render json: @weights
  end

  def image
    @user = User.find_by(id: current_user.id)
    @user.update(user_params)
    render json: @user
  end

  def update
    @user = User.find_by(id: current_user.id)
    if @user.update(user_params)
      render json: @user
    end
  end

  def get_current_user
    @user = User.find_by(id: current_user.id)
    render json: @user
    return
  end

  def password
    @user = User.find_by(id: current_user.id)
    if user_params[:password] == user_params[:password_confirmation] && @user == current_user
      @user.update(user_params)
      render json: {updated: true}
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :avatar, :name, :age, :weight, :height, :gender, :body_fat, :bmr, :smoker, :drinker, :vegetarian)
  end
end
