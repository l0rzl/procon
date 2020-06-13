FROM gitpod/workspace-full
USER gitpod

# Install Ruby #[don't work]
# USER root
# ENV RUBY_VERSION=2.7.1
# RUN bash -lc "rvm install ruby-$RUBY_VERSION && rvm use ruby-$RUBY_VERSION --default"

# Install custom tools, runtime, etc.
#RUN sudo apt-get -q update
#USER root
#RUN apt-get -q update \
#    && sudo apt-get install -yq \
#        ... \
#    && rm -rf /var/lib/apt/lists/*
