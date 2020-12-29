module ApplicationCable
  class Connection < ActionCable::Connection::Base

    def connect
      p "<< Ai SIM >>"
    end

  end
end
