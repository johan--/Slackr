# == Schema Information
#
# Table name: messages
#
#  id                :bigint(8)        not null, primary key
#  user_id           :integer          not null
#  body              :text             not null
#  parent_message_id :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  room_id           :integer          not null
#

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
