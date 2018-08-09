class API::V1::ArticlesController < API::ApplicationController
  before_action :set_article, only: [:show]

  def show
    if @artile
      render json: @article, status: :ok
    else
      render json: { error: 'Article not found' }, status: :not_found
    end
  end

  def index
    @articles = Article.all
    render json: @articles, status: :ok
  end

  private
    def set_article
      @article = Article.find(resource_params[:id])
    end

    def resource_params
      params.permit(:id)
    end
end
