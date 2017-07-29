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

  def sets_for_deletion(params)
    set_ids =[]
    exercise_ids = []

    params[:exercises_attributes].each do |exercise|
      set_ids.push( exercise[:exercise_sets_attributes].collect {|set| set[:id]} )
      exercise_ids.push(exercise[:id])
    end

    set_ids.flatten!

    ids = ExerciseSet.where(exercise_id: exercise_ids).pluck(:id)

    return ids.select {|id| !set_ids.include?(id) }
  end

  def update
    to_delete = sets_for_deletion(workout_params)
    @workout = Workout.find_by(id: workout_params[:id], user_id: current_user.id)
    if @workout.update(workout_params)
      ExerciseSet.where(id: to_delete).destroy_all
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
