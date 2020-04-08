# frozen_string_literal: true

require 'echo_server'

RSpec.describe EchoServer do
  let(:output) { StringIO.new }

  it 'prints prompt with instructions' do
    input = StringIO.new("#{described_class::EXIT_TEXT}\n")
    described_class.new(Console.new(input, output)).run
    expect(output.string).to include(described_class::PROMPT)
  end

  it 'prints what the user typed' do
    input = StringIO.new("hello\n#{described_class::EXIT_TEXT}\n")
    described_class.new(Console.new(input, output)).run
    expect(output.string).to include('hello')
  end

  it 'prints what the user typed several times' do
    input = StringIO.new("hello\nbye\n#{described_class::EXIT_TEXT}\n")
    described_class.new(Console.new(input, output)).run
    expect(output.string).to include('hello')
    expect(output.string).to include('bye')
  end

  it 'prints the prompt before every user input' do
    input = StringIO.new("hello\nbye\n#{described_class::EXIT_TEXT}\n")
    described_class.new(Console.new(input, output)).run
    expect(output.string.scan(described_class::PROMPT).size).to eq(3)
  end

  it 'stops running if user types exit text' do
    input = StringIO.new("#{described_class::EXIT_TEXT}\n")
    described_class.new(Console.new(input, output)).run
    expect(output.string).to include(described_class::EXIT_TEXT)
  end
end
