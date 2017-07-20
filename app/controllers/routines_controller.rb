class RoutinesController < ApplicationController
  def index
    @routines = Routine.all
    render json: @routines
  end

  def create
    @routine = Routine.new(routine_params)
    if @routine.save()
      render json: @routine
    end
  end

  def show
    @routine = Routine.find(params[:id])
    render json: @routine
  end

  def update
    @routine = Routine.find(routine_params[:id])
    if @routine.update(routine_params)
      render json: @routine
    end
  end

  def destroy
    @routine = Routine.find(params[:id])
    if @routine.delete
      render json: @routine
    end
  end

  private
  def routine_params
    params.require(:routine).permit(:id, :name, :start_date, :end_date)
  end
end
