class ExercisesController < ApplicationController
   def index
    @exercises = exercise.all
    render json: @exercises
  end

  def create
    @exercise = exercise.new(exercise_params)
    if @exercise.save()
      render json: @exercise
    end
  end

  def show
    @exercise = exercise.find(params[:id])
    render json: @exercise
  end

  def update
    @exercise = exercise.find(exercise_params[:id])
    if @exercise.update(exercise_params)
      render json: @exercise
    end
  end

  def destroy
    @exercise = exercise.find(params[:id])
    if @exercise.delete
      render json: @exercise
    end
  end

  private
  def exercise_params
    params.require(:exercise).permit(:id, :name, :rest_time)
  end
end
