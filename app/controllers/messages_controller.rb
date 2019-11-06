
class MessagesController < ApplicationController
  before_action :set_group
  @inport = 'message';

  def index
    # @users = Users.find(params[:user])
    @message = Message.new
    @messages = @group.messages.includes(:user)
  end

  def create
    @message = @group.messages.new(message_params)
    if  @message.save
      respond_to do |format|
        format.json
        # format.html{redirect_to group_messages_path(@group),notice: 'メッセージ送信されました'}
      end
    else
      @messages = @group.messages.includes(:user)
      flash.now[:alert] = 'メッセージは入れなよ'
      render :index
    end

  end

  private

  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end


