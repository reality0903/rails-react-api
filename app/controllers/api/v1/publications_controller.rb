class API::V1::PublicationsController < API::ApplicationController
  before_action :set_publication, only: [:show]

  def show
    if @publication
      render json: @publication, status: :ok
    else
      render json: { error: 'Cannot find publication' }, status: :not_found
    end
  end

  def index
    @publications = Publication.all
    render json: @publications, status: :ok
  end

  private
    def set_publication
      @publication = Publication.find(resource_params[:id])
    end

    def resource_params
      params.permit(:id)
    end
end
