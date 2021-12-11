using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest  //Create do not return so no return type fpr IRequest
        {
            public Activity Activity { get; set; }  //parameter to recieve
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Activities.Add(request.Activity);
                
                await _context.SaveChangesAsync();

                return Unit.Value; //This does nothing but just return that Task is done as this method returns a TASK
            }

            
        }
    }
}