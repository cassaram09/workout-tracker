class WorkoutsController < ApplicationController
  
  def index
    @workouts = Workout.where(user_id: current_user.id)
    render json: @workouts
  end

  def create
    @workout = Workout.new(workout_params)
    @workout.user = current_user
    if @workout.save
      render json: @workout
    end
  end

  def show
    @workout = Workout.find_by(id: params[:id], user_id: current_user.id)
    render json: @workout
  end

  def update
    @workout = Workout.find_by(id: workout_params[:id], user_id: current_user.id)
    if @workout.update(workout_params)
      render json: @workout
    end
  end

  def destroy
    @workout = Workout.find_by(params[:id], user_id: current_user.id)
    if @workout.delete
      render json: @workout
    end
  end

  private
  def workout_params
    params.require(:workout).permit(:id, :name, :rest_time, :start_time, :end_time, :date, exercises_attributes: [:id, :name, :rest_time, exercise_sets_attributes: [:repititions, :weight, :id, :exercise_id]])
  end
end
