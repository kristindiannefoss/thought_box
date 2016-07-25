class Api::V1::LinksController < Api::ApiController
  respond_to :json
  before_action :set_user

  def index
    respond_with @user.links.all
  end

  def show
    respond_with @user.links.find(params[:id])
  end

  def create
    link = @user.links.create(link_params)
    if link.save
      respond_with link
    end
  end

  def destroy
    respond_with status: 204 if @user.links.delete(params[:id])
  end

  def update
    @link = Link.find(params[:id])
    @link.update(link_params)
    # @link = Link.find(params[:id])
    # respond_with @link if @link.update(link_params)
  end

  private

    def set_user
      @user = current_user
    end

    def link_params
      params.require(:link).permit(:id, :title, :url, :read, :user_id)
    end
end
